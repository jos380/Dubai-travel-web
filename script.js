/* GENERAL STYLES */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    background-color: #f9f9f9;
    color: #333;
}

/* HEADER */
header {
    background-color: #004080;
    color: white;
    padding: 20px 0;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 2rem;
}

header nav ul {
    list-style: none;
    padding: 0;
    margin: 15px 0 0;
    display: flex;
    justify-content: center;
    gap: 25px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 6px 10px;
    transition: 0.3s;
}

header nav ul li a:hover,
header nav ul li a.active {
    background: rgba(255, 255, 255, 0.25);
    border-radius: 5px;
}

/* SECTIONS */
section {
    padding: 50px 20px;
    text-align: center;
}

section h2 {
    color: #004080;
    margin-bottom: 20px;
    font-size: 1.8rem;
}

/* ATTRACTIONS */
.attractions-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
}

.attraction {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.12);
    transition: transform 0.3s;
}

.attraction:hover {
    transform: translateY(-5px);
}

.attraction img {
    width: 100%;
    border-radius: 10px;
}

/* GALLERY */
.gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

.gallery figure {
    margin: 0;
    width: 250px;
}

.gallery img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.15);
}

figcaption {
    margin-top: 8px;
    font-weight: bold;
    color: #004080;
}

/* FOOTER */
footer {
    background-color: #004080;
    color: white;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
}
