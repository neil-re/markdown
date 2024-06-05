// Created by Neil Reyes
// GitHub: https://github.com/neil-re/

document.addEventListener('DOMContentLoaded', function () {
    const md = window.markdownit();
    const { jsPDF } = window.jspdf;

    function updateHtmlOutput() {
        const markdownText = document.getElementById('markdown-input').value;
        const htmlOutput = md.render(markdownText);
        document.getElementById('html-output').innerHTML = htmlOutput;
    }

    document.getElementById('markdown-input').addEventListener('input', updateHtmlOutput);

    document.getElementById('convert-html').addEventListener('click', updateHtmlOutput);

    document.getElementById('export-pdf').addEventListener('click', function () {
        const markdownText = document.getElementById('markdown-input').value;
        const htmlOutput = md.render(markdownText);

        const doc = new jsPDF();
        doc.html(htmlOutput, {
            callback: function (doc) {
                const fileName = prompt("Enter the file name for the PDF:", "output.pdf");
                if (fileName) {
                    doc.save(fileName);
                }
            },
            x: 10,
            y: 10
        });
    });
});