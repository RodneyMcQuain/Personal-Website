<!DOCTYPE html>
<head>
  <title>Rodney McQuain</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="style/stylesheet.min.css">
</head>

<body dataspy="scroll" data-target=".navbar" data-offset="50">

  <!-- Preloader -->
  <div id="preloader-overlay">
    <div id="preloader-spinner"></div>
  </div>

  <nav class="navbar navbar-fixed-top navbar-inverse" id="nav">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#my-nav">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>

      <div>
        <div class="collapse navbar-collapse" id="my-nav">
          <ul class="nav navbar-nav">
            <li><a class="anchor" href="#about-me">About Me</a></li>
            <li><a class="anchor" href="#education">Education</a></li>
            <li><a class="anchor" href="#projects">Projects</a></li>
            <li><a class="anchor" href="#technologies">Skills</a></li>
            <li><a class="anchor" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div class="img-fluid" id="banner-img">
    <div class="col-xl-12 col-md-12 col-sm-12 col-xs-12" id="banner-container">
      <h1 id="banner-header" class="banner-hide">Rodney McQuain</h1>
      <p id="banner-text" class="banner-hide">
        Hello, I am a computer science major looking for an opportunity
        to test my skills and grow as a developer.
      </p>
      <a id="banner-btn" class="-curved-border banner-hide" href="#about-me">Learn About Me</a>
    </div>
  </div>

  <!-- About Me -->
  <div class="container">
    <div class="page-header">
      <h1><span id="about-me"></span>About Me</h1>
    </div>
    <img src="assets/images/me.jpg" class="img-fluid img-rounded" id="me-img">
    <p id="about-me-text">
      &nbsp;&nbsp;&nbsp;&nbsp;I recently received my AS in software development from Ivy Tech Community College and I currently attend
      Purdue University Fort Wayne, looking to get my BS in computer science with a software engineering focus.
      Countless hours of my time are dedicated to furthering my knowledge of programming and becoming the best
      I can be.  I am highly self-motivated and eager to get employed in a position where I can test my skills
      and further my growth as a software engineer.
      <br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;Aside from programming I put my time into competitive video games.  Just like programming it requires and improves
      my critical thinking and problem solving skills.  I am currently ranked top 5 in Indiana for
      Super Smash Bros. Melee.  Further, it is something I am very passionate about and is a testament
      to my dedication of being the best that I can be at whatever I put my mind to.
    </p>
  </div>

  <!-- Education -->
  <div class="container">
    <div class="page-header">
      <h1><span id="education"></span>Education</h1>
    </div>
  </div>

  <div class="container">
      <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 education-container">
        <div class="-curved-border">
          <img src="assets/images/pufw.jpg" class="img-fluid img-thumbnail rounded projects-grid">
          <h3 class="education-institution">Purdue University Fort Wayne</h3>
          <p>Fort Wayne, Indiana</p>
          <p>BS in Computer Science</p>
          <p>Expected Graduation Date: 12/2020</p>
          <p>GPA: 4.0/4.0</p>
        </div>
      </div>

      <div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 education-container">
        <div class="-curved-border">
          <img src="assets/images/ivyTech.jpg" class="img-fluid img-thumbnail rounded projects-grid">
          <h3 class="education-institution">Ivy Tech Community College</h3>
          <p>Fort Wayne, Indiana</p>
          <p>AS in Software Development</p>
          <p>Graduation Date: 12/2017</p>
          <p>GPA: 3.9/4.0</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Projects -->
  <div class="container">
    <div class="page-header">
      <h1><span id="projects"></span>Projects</h1>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <!-- West Virginia RV -->
      <div class="col-xl-4 col-md-4 col-sm-12 col-xs-12 project-container">
        <div class="-curved-border">
          <img src="assets/images/westVirginiaRV.jpg" class="img-fluid img-thumbnail rounded projects-grid">
          <div class="language-tag">
            <span class="language-tag">Java</span>
            <span class="language-tag">FXML</span>
            <span class="language-tag">MySQL</span>
          </div>
          <h3>West Virginia RV</h3>
          <p class="projects-grid">A small business opportunity in West Virginia arose where outsourced laborers needed
            close by rental property to put their recreational vehicles. So, to aid in keeping track of important information
            I made this program. The main purpose of this app is to keep track of a laborer's property position,
            contact information, bills, and payment status (based on weekly or monthly periods); as well as the general
            upkeep and utility bills for the property as a whole.</p>
          <button class="btn">
            <a href="https://github.com/RodneyMcQuain/West-Virginia-RV" style="color: inherit;">
              <span class="fa fa-github projects-grid"> Github</span>
            </a>
          </button>
        </div>
      </div>

      <!-- Fast Twitch Games -->
      <div class="col-xl-4 col-md-4 col-sm-12 col-xs-12 project-container">
        <div class="-curved-border">
          <img src="assets/images/fastTwitchGames.jpg" class="img-fluid img-thumbnail rounded projects-grid">
          <div class="language-tag">
            <span class="language-tag">JavaScript</span>
          </div>
          <h3>Fast Twitch Games</h3>
          <p class="projects-grid">A chrome extension using Twitch API that quickly links to people streaming your favorite video games.
            The extension stores your games in local storage for easy access and displays the twitch user, stream title, view count, and stream thumbnail
            for each stream of a specified game.</p>
          <button class="btn">
            <a href="https://github.com/RodneyMcQuain/Fast-Twitch-Games" style="color: inherit;">
              <span class="fa fa-github projects-grid"> Github</span>
            </a>
          </button>
        </div>
      </div>

      <!-- Melee Notes -->
      <div class="col-xl-4 col-md-4 col-sm-12 col-xs-12 project-container">
        <div class="-curved-border">
          <img src="assets/images/meleeNotes.jpg" class="img-fluid img-thumbnail rounded projects-grid">
          <div class="language-tag">
            <span class="language-tag">Java</span>
            <span class="language-tag">JUnit</span>
            <span class="language-tag">SQLite</span>
          </div>
          <h3>Melee Notes</h3>
          <p class="projects-grid">Melee Notes is a note app for competitive Super Smash Bros. Melee players.
          It lets users record tournaments, sets, and games taking data from these records to query statistics based
          on user specifications for more than 5 different fields.  The app also allows for notes to be taken
          about players, characters, analysis, and mentality alongside with reports on tournaments and money earned.</p>
          <button class="btn btn-dark">
            <a href="https://github.com/RodneyMcQuain/Melee-Notes" style="color: inherit;">
              <span class="fa fa-github projects-grid"> Github</span>
            </a>
          </button>
        </div>
      </div>

    </div>

    <div id="project-row-2" class="row hidden-project-row">

      <!-- CRUD Music -->
      <div class="col-xl-4 col-md-4 col-sm-12 col-xs-12 project-container">
        <div class="-curved-border">
          <img src="assets/images/musicProgram.jpg" class="img-fluid img-thumbnail rounded projects-grid">
          <div class="language-tag">
            <span class="language-tag">C#</span>
            <span class="language-tag">JavaScript</span>
            <span class="language-tag">ASP.NET</span>
            <span class="language-tag">Bootstrap</span>
          </div>
          <div class="language-tag" style="padding-top: 0;">
            <span class="language-tag">SQL Server</span>
          </div>
          <h3>CRUD Music</h3>
          <p class="projects-grid">A simple CRUD app with user login where a user can create, select, update, and delete artist and album
            records. As well as displaying a random artist and album to listen to each day based on the user's records.</p>
          <button class="btn">
            <a href="https://github.com/RodneyMcQuain/CRUD-Music" style="color: inherit;">
              <span class="fa fa-github projects-grid"> Github</span>
            </a>
          </button>
        </div>
      </div>

      <!-- Melee Calculator -->
      <div class="col-xl-4 col-md-4 col-sm-12 col-xs-12 project-container">
        <div class="-curved-border">
          <img src="assets/images/meleeCalc.jpg" class="img-fluid img-thumbnail rounded projects-grid">
          <div class="language-tag">
            <span class="language-tag">Java</span>
          </div>
          <h3>Melee Calculator</h3>
          <p class="projects-grid">The Melee Calculator is a calculator for competitive Super
          Smash Bros. Melee players. It calculates various useful formulas
          that are not easily solved by hand, such as knockback, hitstun, hitlag,
          stale move negation, and frame advantage on block, hit, and Amsah Tech.</p>
          <button class="btn">
            <a href="https://github.com/RodneyMcQuain/Melee-Calculator" style="color: inherit;">
              <span class="fa fa-github projects-grid"> Github</span>
            </a>
          </button>
        </div>
      </div>

      <!-- PHP Login -->
      <div class="col-xl-4 col-md-4 col-sm-12 col-xs-12 project-container">
        <div class="-curved-border">
          <img src="assets/images/phpLogin.jpg" class="img-fluid img-thumbnail rounded projects-grid">
          <div class="language-tag">
            <span class="language-tag">PHP</span>
            <span class="language-tag">JavaScript</span>
            <span class="language-tag">MySQL</span>
          </div>
          <h3>PHP Login System</h3>
          <p class="projects-grid">Simple template PHP login system using MySQL that takes the user
          to a welcome page with their username and a logout button. Some other features include password
          hashing and regular expressions for live password validation.</p>
          <button class="btn">
            <a href="https://github.com/RodneyMcQuain/PHP-Login-System" style="color: inherit;">
              <span class="fa fa-github projects-grid"> Github</span>
            </a>
          </button>
        </div>
      </div>

    </div>
  </div>

  <div>
    <button id="project-dropdown" class="btn-dropdown">
      <span class="fa fa-angle-double-down"/>
    </button>
  </div>

  <!-- Technologies -->
  <div class="container">
    <div class="page-header">
      <h1><span id="technologies"></span>Skills</h1>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <!-- Programming Languages -->
      <div class="-top-margin col-xl-4 col-md-4 col-sm-4 col-xs-12">
        <h3 class="technologies">Progamming Languages</h3>
        <div class="technologies">Java</div>
        <div class="technologies">C#</div>
        <div class="technologies">JavaScript</div>
        <div class="technologies">PHP</div>
      </div>

      <!-- Other Languages -->
      <div class="-top-margin col-xl-4 col-md-4 col-sm-4 col-xs-12">
        <h3 class="technologies">Other Languages</h3>
        <div class="technologies">HTML/FXML</div>
        <div class="technologies">CSS</div>
        <div class="technologies">SCSS</div>
        <div class="technologies">SQL</div>
      </div>

      <!-- Frameworks -->
      <div class="-top-margin col-xl-4 col-md-4 col-sm-4 col-xs-12">
        <h3 class="technologies">Frameworks</h3>
        <div class="technologies">Bootstrap</div>
        <div class="technologies">ASP.NET</div>
        <div class="technologies">JUnit</div>
      </div>

    </div>

    <div id="technology-row-2" class="row hidden-technology-row">

      <!-- Database Management -->
      <div class="-top-margin col-xl-4 col-md-4 col-sm-4 col-xs-12">
        <h3 class="technologies">Database Management</h3>
        <div class="technologies">SQLite</div>
        <div class="technologies">MySQL</div>
        <div class="technologies">SQL Server</div>
        <div class="technologies">Microsoft Access</div>
      </div>

      <!-- IDEs -->
      <div class="-top-margin col-xl-4 col-md-4 col-sm-4 col-xs-12">
        <h3 class="technologies">IDEs</h3>
        <div class="technologies">Eclipse</div>
        <div class="technologies">Visual Studio</div>
        <div class="technologies">Atom</div>
      </div>

      <!-- Version Control -->
      <div class="-top-margin col-xl-4 col-md-4 col-sm-4 col-xs-12">
        <h3 class="technologies">Version Control</h3>
        <div class="technologies">Git</div>
      </div>

    </div>
  </div>

  <div>
    <button id="technology-dropdown" class="btn-dropdown">
      <span class="fa fa-angle-double-down"/>
    </button>
  </div>

  <!-- Contact Modal -->
  <div class="modal" ID="aModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal">&times;</button>
          <h2 class="modal-title" id="modal-title"></h2>
        </div>

        <div class="modal-body">
          <p id="modal-body"></p>
        </div>

        <div class="modal-footer">
          <button id="btn-modal-close" class="btn" data-dismiss="modal">
            <span class="fa fa-times" aria-hidden="true"></span> Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact -->
  <div class="container">
    <div class="page-header">
      <h1><span id="contact"></span>Contact</h1>
    </div>

    <div class="col-xl-12 col-md-12 col-sm-12 col-xs-12">
      <div class="center-container contact-container -curved-border">
        <p id="validation-text"></p>
        <form name="contact-form" id="contact-form" action="scripts/contactForm.php" method="POST">
          <div class="-border">
            <input type="text" id="name" name="name" class="form-control input-lg" placeholder="Full Name">
          </div>

          <div class="-border">
            <input type="text" id="email" name="email" class="form-control input-lg" placeholder="E-Mail">
          </div>

          <div class="-border">
            <input type="text" id="subject" name="subject" class="form-control input-lg" placeholder="Subject">
          </div>

          <div class="-border">
            <textarea id="message" name="message" class="form-control input-lg" placeholder="Message"></textarea>
          </div>

          <div class="-border">
            <button type="submit" name="submit" id="submit" class="btn btn-lg">
              <span class="fa fa-envelope"></span> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <div class="row">
      <div class="col-md-6">
        <p>&copy 2018 Copyright: Rodney McQuain</p>
      </div>

      <div class="col-md-6">
        <ul class="list-unstyled list-inline">
          <button class="btn btn-dark">
            <a href="https://github.com/RodneyMcQuain/">
              <span class="fa fa-github"> My Github</span>
            </a>
          </button>
          <button class="btn btn-dark">
            <a href="https://www.linkedin.com/in/rodneymcquain/">
              <span class="fa fa-linkedin"> My LinkedIn</span>
            </a>
          </button>
        </ul>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="scripts/preloader.js" type="text/javascript"></script>
  <script type="text/javascript">
    $(document).ready(function () {
      $('body').scrollspy({
        target: '#my-nav',
        offset: 75
      });
    });
  </script>
  <script src="scripts/bannerEffects.js" type="text/javascript"></script>
  <script src="scripts/projectDropdown.js" type="text/javascript"></script>
  <script src="scripts/technologyDropdown.js" type="text/javascript"></script>
  <script src="scripts/contactFormValidation.js" type="text/javascript"></script>
  <script>
    $(document).ready(function () {
      $("#contact-form").submit(function(event) {
        event.preventDefault();

        let url = "scripts/contactForm.php";
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;
        let submit = document.getElementById("submit").value;
        let dataToSend = {
          "name" : name,
          "email" : email,
          "subject" : subject,
          "message" : message,
          "submit" : submit
        }

        let modalTitle = document.getElementById("modal-title");
        let modalBody = document.getElementById("modal-body");
        modalTitle.innerHTML = "Contact Form";

        $.ajax({
          type: "POST",
          dataType: "text",
          url: url,
          data: dataToSend,
          success: function(responseText) {
            if (responseText == "emailSent") {
              modalBody.innerHTML = "Email sent successfully, thank you.";
              document.getElementById("contact-form").reset();
            } else if (responseText == "invalidEmail")
              modalBody.innerHTML = "Please enter a valid email.";
            else if (responseText == "empty")
              modalBody.innerHTML = "Please do not leave any empty fields.";
            else
              modalBody.innerHTML = "Error sending email, try again. If the error persists you can"
                                + " directly send an email to me at rodneymcquain95@gmail.com.";

            $("#aModal").modal("show");
          },
          error: function() {
            modalBody.innerHTML = "Error sending email, try again. If the error persists you can"
                                + " directly send an email to me at rodneymcquain95@gmail.com.";

            $("#aModal").modal("show");
          }
        });

        return false;
      });
    });
  </script>

</body>
