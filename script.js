document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const enlargedImg = document.querySelector('.enlarged-img');
    const enlargedImgContainer = document.querySelector('.enlarged-img-container');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            enlargedImg.src = this.src;
            enlargedImgContainer.style.display = 'block';
        });
    });

    enlargedImgContainer.addEventListener('click', function() {
        enlargedImgContainer.style.display = 'none';
    });
});
