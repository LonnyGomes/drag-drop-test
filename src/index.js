console.log('here');

const dropZone = document.getElementById('dropZone');

// Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
dropZone.addEventListener('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

// Get file data on drop
dropZone.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
    const files = e.dataTransfer.files; // Array of all files

    for (const file of files) {
        if (file.type.match(/image.*/)) {
            const reader = new FileReader();

            reader.onload = function(e2) {
                // finished reading file data.
                const img = document.createElement('img');
                img.src = e2.target.result;
                document.body.appendChild(img);
            };

            reader.readAsDataURL(file); // start reading the file data.
        }
    }
});
