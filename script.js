

    
  

/* fungsi untuk membuat perpindahan layar pada mahasiswa halus */
    document.addEventListener('DOMContentLoaded', function() {
        const studentContainer = document.querySelector('.student');
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');
        const studentImages = Array.from(studentContainer.children);
        let currentIndex = 0;
        const itemsPerPage = 8;
    
        function updateStudentDisplay() {
            const start = currentIndex * itemsPerPage;
            const end = start + itemsPerPage;
            studentImages.forEach((img, index) => {
                img.style.display = (index >= start && index < end) ? 'block' : 'none';
            });
        }
    
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % Math.ceil(studentImages.length / itemsPerPage);
            updateStudentDisplay();
            studentContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + Math.ceil(studentImages.length / itemsPerPage)) % Math.ceil(studentImages.length / itemsPerPage);
            updateStudentDisplay();
            studentContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
    
        updateStudentDisplay();
    });
    
// Fungsi scroll secara halus
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default dari tautan
            
            // Dapatkan ID elemen target dari atribut href
            const targetId = this.getAttribute('href').substring(1);
            
            // Dapatkan elemen target berdasarkan ID
            const targetElement = document.getElementById(targetId);
            
            // Gulir halaman secara halus ke elemen target menggunakan smooth scrolling
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    













// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const students = document.querySelectorAll('.student');
    const perPage = 8;
    const totalPages = Math.ceil(students.length / perPage);
    let currentPage = 1;

    function showPage(page) {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;

        students.forEach((student, index) => {
            if (index >= startIndex && index < endIndex) {
                student.style.display = 'block';
            } else {
                student.style.display = 'none';
            }
        });
    }

    function navigatePage(direction) {
        currentPage += direction;
        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        showPage(currentPage);
    }

    showPage(currentPage);

    const prevPageBtn = document.querySelector('.pagination a:first-child');
    const nextPageBtn = document.querySelector('.pagination a:last-child');

    prevPageBtn.addEventListener('click', function (event) {
        event.preventDefault();
        navigatePage(-1);
    });

    nextPageBtn.addEventListener('click', function (event) {
        event.preventDefault();
        navigatePage(1);
    });
});
