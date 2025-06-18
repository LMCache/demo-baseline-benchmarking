
import gradio as gr
from gradio_fasta import FASTA


example = FASTA().example_inputs()

demo = gr.Interface(
    lambda x:x,
    FASTA(),  # interactive version of your component
    FASTA(),  # static version of your component
    # examples=[[example]],  # uncomment this line to view the "example version" of your component
)


if __name__ == "__main__":
    demo.launch()
