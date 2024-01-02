const selected_clip_text=document.getElementById("selected-clip");

document.getElementById('file-input').addEventListener('change', function(e) {
    if (e.target.files[0]) {
        selected_clip_text.innerText='You selected ' + e.target.files[0].name;
    }
  });


