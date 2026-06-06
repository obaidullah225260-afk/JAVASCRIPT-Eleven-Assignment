const inp = document.getElementById("inp");
const feed = document.getElementById("feed");
const button = document.getElementById("button");
let editTarget = null;
function addPost() {
  const text = inp.value.trim();

  if (text === "") {
    alert("Please Write Something!!");
    return;
  }

  if (editTarget !== null) {
    editTarget.firstChild.textContent = text + " ";

    button.textContent = "Post";
    editTarget = null;
  } else {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = text + " ";

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Upd";
    editBtn.onclick = function () {
      editPost(box);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Del";
    deleteBtn.onclick = function () {
      deletePost(box);
    };

    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);
    box.appendChild(buttonsDiv);

    feed.prepend(box);
  }

  inp.value = "";
}

function editPost(postBox) {
  inp.value = postBox.firstChild.textContent.trim();

  button.textContent = "Update";

  editTarget = postBox;
  inp.focus();
}

function deletePost(postBox) {
  postBox.remove();
}
inp.value = "";
