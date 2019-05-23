var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsidXNlciIsIm1haWwiLCJzdG9yZSJdLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiNWM2MTBiNDlmZGE5ZGIyYzA4MGJmNDgzIiwiZXhwIjoxNTg2NjI4NTUwLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDYxLyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwNjEvIn0.sb_ybk24nafWoCSj9m3_pJ6FSxz0xf68E_exSZXRY2U';

$(document).ready(function () {
  $("form").submit(handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();

  var msg = $('#msg').val();
  var email = $('#email').val();

  var data = {
    to: "erik.tomlan@gmail.com",
    subject: "corageo.github.io",
    body: msg,
    from: email
  }

  $.ajax({
    type: "POST",
    url: "https://stored.azurewebsites.net/api/mail",
    headers: {
      "Authorization": 'Bearer ' + token
    },
    data: JSON.stringify(data),
    contentType: "application/json"
  })
    .done(function () {
      console.log('OK');
      document.getElementsByClassName("alert")[0].style.display = "block";
    })
    .fail(function (error) {
      console.log(error);
      document.getElementsByClassName("alert")[1].style.display = "block";
    });
}

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#6c9dc6"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

