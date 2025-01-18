// Poem text
const kiplingPoem = `<p>book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>;    
book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; book your tickets <span>now</span> select your seats <span>online</span> and <span>book</span> your <span>tickets</span>
Are <span>Afraid</span> that the movie might not be to your liking <span>don't worry</span> ; 
The movies on our website are  <span>top-notched</span> and <span>highly rated</span>; </p>`;
function insertPoemIntoDivs() {
	const textDivs = document.querySelectorAll(".text");
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
const seats = document.querySelectorAll('.seat');
seats.forEach(seat => { seat.addEventListener('click', () => { seat.classList.toggle('selected'); }); });
const button = document.getElementById("bookticket");

       
		const style = document.createElement('style');
        style.textContent = `
    
            .alert-box {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            }

      
            .hidden {
                display: none;
            }

            .alert-content {
                position: relative;
                background: white;
                padding: 20px;
                width: 90%;
                max-width: 400px;
				color: rgba(207, 15, 15, 0.92); 	
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                text-align: center;
                animation: fadeIn 0.3s ease-in-out;
				background-color: #000000;
            }

            .close-btn {
                position: absolute;
                top: 10px;
                right: 15px;
                font-size: 18px;
                color: #333;
                cursor: pointer;
            }

            button {
                margin-top: 15px;
                padding: 10px 20px;
                background-color: #007BFF;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            button:hover {
                background-color: #0056b3;
            }

            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `;
        document.head.appendChild(style);
        function showAlert() {
            document.getElementById('alert-box').classList.remove('hidden');
        }
        function closeAlert() {
            document.getElementById('alert-box').classList.add('hidden');
        }