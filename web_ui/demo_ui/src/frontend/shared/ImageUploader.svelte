<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { BlockLabel } from "@gradio/atoms";
	import { File as FileIcon } from "@gradio/icons";
	import ImagePreview from "./ImagePreview.svelte";

	import { Upload } from "@gradio/upload";
	import { type FileData, normalise_file } from "@gradio/client";
	import ClearImage from "./ClearImage.svelte";

	export let value: null | FileData;
	export let label: string | undefined = undefined;
	export let show_label: boolean;
	export let root: string;

	let upload: Upload;
	let uploading = false;
	let fasta_text = "";

	async function loadFastaFile(filePath) {
        const response = await fetch(filePath);
        fasta_text = await response.text();
		fasta_text = fasta_text.replaceAll("G", "<span style='color: green'>G</span>");
		fasta_text = fasta_text.replaceAll("A", "<span style='color: red'>A</span>");
		fasta_text = fasta_text.replaceAll("T", "<span style='color: blue'>T</span>");
		fasta_text = fasta_text.replaceAll("C", "<span style='color: orange'>C</span>");
		fasta_text = fasta_text.replaceAll(/^(>.*)$/gm, "<span style='color: gray !important'>$1</span>");
	}

	function handle_upload({ detail }: CustomEvent<FileData>): void {
		value = normalise_file(detail, root, null);
		dispatch("upload");
		loadFastaFile(value.url);
	}
	$: if (uploading) value = null;
	$: value && !value.url && (value = normalise_file(value, root, null));

	const dispatch = createEventDispatcher<{
		change?: never;
		clear?: never;
		drag: boolean;
		upload?: never;
	}>();

	let dragging = false;
	$: dispatch("drag", dragging);
</script>

<BlockLabel {show_label} Icon={FileIcon} label={label || "Image"} />

<div data-testid="image" class="image-container">
	{#if value?.url}
		<ClearImage
			on:remove_image={() => {
				value = null;
				dispatch("clear");
			}}
		/>
	{/if}
	{#if value === null}
	<div class="upload-container">
		<Upload
			hidden={value !== null}
			bind:this={upload}
			bind:uploading
			bind:dragging
			filetype="text/plain"
			on:load={handle_upload}
			on:error
			{root}
		>
			{#if value === null}
				<slot />
			{/if}
		</Upload>
	</div>
	{:else}
	<div id="fasta_content">{@html fasta_text}</div>
	{/if}
</div>

<style>
	.image-frame {
		object-fit: cover;
		width: 100%;
		height: 100%;
		margin: auto;
	}

	.upload-container {
		height: 100%;
		flex-shrink: 1;
		max-height: 100%;
	}

	.image-container {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-height: 100%;
	}

	#fasta_content {
		padding: 25px 5px 0px 5px;
		overflow-x: scroll;
		overflow-y: scroll;
		font-family: Consolas, 'Courier New', monospace;
	}
</style>
