<script lang="ts">
	import { BlockLabel, Empty, IconButton } from "@gradio/atoms";

	import { File as FileIcon } from "@gradio/icons";
	import { type FileData } from "@gradio/client";
	import type { I18nFormatter } from "@gradio/utils";

	export let value: null | FileData;
	export let label: string | undefined = undefined;
	export let show_label: boolean;
	export let show_download_button = true;
	export let selectable = false;
	export let i18n: I18nFormatter;

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

	$: if (value && value.url) {
		loadFastaFile(value.url);
	}
</script>

<BlockLabel
	{show_label}
	Icon={FileIcon}
	label={label || i18n("image.image")}
/>
{#if value === null || !value.url}
	<Empty unpadded_box={true} size="large"><FileIcon /></Empty>
{:else}
	<div id="fasta_content">{@html fasta_text}</div>
{/if}

<style>
	.image-container :global(img),
	button {
		width: var(--size-full);
		height: var(--size-full);
		object-fit: contain;
		display: block;
		border-radius: var(--radius-lg);
	}

	.selectable {
		cursor: crosshair;
	}

	.icon-buttons {
		display: flex;
		position: absolute;
		top: 6px;
		right: 6px;
		gap: var(--size-1);
	}

	#fasta_content {
		padding: 25px 5px 0px 5px;
		overflow-x: scroll;
		overflow-y: scroll;
		font-family: Consolas, 'Courier New', monospace;
	}
</style>
