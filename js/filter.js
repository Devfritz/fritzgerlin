const btnFilterAll = document.querySelectorAll('.btn-filter');
btnFilterAll.forEach(item => {
    item.addEventListener('click', function (e) {
        item.classList.add('active');
        let value = e.target.dataset.filter;
        let images = document.querySelectorAll('.port-img');
        images.forEach(item => {
            if (value === 'all') {
                item.style.display = 'block';
            }
            else if (item.classList.contains(value)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        })
        e.preventDefault();
    });

});
