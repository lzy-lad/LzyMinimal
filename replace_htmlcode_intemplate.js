import os

# Define the HTML code to inject
html_code = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lzy Lad's Portfolio</title>
    <style>
        body {
            font-family: 'Merriweather', sans-serif;
            font-size: 16px;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #1c1c1c;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 50px;
        }
        h1 {
            font-size: 36px;
            font-weight: 900;
            margin: 0 0 20px;
            text-align: center;
            color: #f0f0f0;
        }
        .wordcloud {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
        }
        .word {
            font-size: 48px;
            font-weight: 600;
            margin: 10px;
            padding: 10px;
            
            color: #525252;
            text-decoration: none;
           
            transition: background-color 0.3s ease;
        }
        .word:hover {
            background-color: #1c1c1c;
            color: #f7f7f7;
            border-radius: 12px;
            transition: background-color 0.3s ease;
        }
        @media screen and (max-width: 768px) {
            .wordcloud {
                margin-top: 20px;
            }
            .word {
                font-size: 18px;
                margin: 5px;
                padding: 5px;
            }
        }
    
        .home-button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #b4b4b4;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
}

.home-button:hover {
  transform: scale(1.2);
}

.home-button i {
  font-size: 24px;
  color: #333;
}

    </style>


</head>
<body>
    <div class="container">
        <h1>Lzy Lad's Portfolio</h1>
        <div class="wordcloud">
            <a href="Brandingportfolio.html" class="word">Branding</a>
            <a href="ARportfolio.html" class="word">AR</a>
            <a href="VRportfolio.html" class="word">VR</a>
            <a href="Logoportfolio.html" class="word">Logos</a>
            <a href="visualartportfolio.html" class="word">VisualArt</a>
            <a href="Typographyportfolio.html" class="word">Typography</a>
            <a href="PostersPortfolio.html" class="word">Posters</a>
            <a href="360Galleryportfolio.html" class="word">360 Gallery</a>
            <a href="Motiondesignportfolio.html" class="word">Motion Design</a>
            <a href="VFXportfolio.html" class="word">VFX</a>
            <a href="CGIportfolio.html" class="word">CGI</a>
            <a href="Fractalartportfolio.html" class="word">Fractal Art</a>
            <a href="Illustrationsportfolio.html" class="word">Illustrations</a>
            <a href="Packagingdesignportfolio.html" class="word">Packaging Design</a>
            <a href="Merchandiseportfolio.html" class="word">Merchandise</a>
            <a href="storeportfolio.html" class="word">Store</a>
            <a href="tutorialsportfolio.html" class="word">Tutorials & Knowledge</a>
            <a href="blogportfolio.html" class="word">Blog</a>
            <a href="writingportfolio.html" class="word">Writing</a>
            <a href="poetryportfolio.html" class="word">Poetry</a>
            <a href="Musicportfolio.html" class="word">Music</a>
        </div>
    </div>
</body>
</html>

<a href="index2.html" class="home-button">
    <i class="fa fa-home"></i>
  </a>
"""

# Loop through all HTML files in the current directory that contain "portfolio" in their name
for filename in os.listdir("."):
    if filename.endswith(".html") and "portfolio" in filename:
        # Read the contents of the file
        with open(filename, "r") as f:
            file_contents = f.read()
        
        # Insert the HTML code into the file contents
        new_contents = file_contents.replace("<!-- Insert your HTML code here -->", html_code)
        
        # Write the modified file contents back to the file
        with open(filename, "w") as f:
            f.write(new_contents)
