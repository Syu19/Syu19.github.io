console.log("read fun loaded.");

let fileHandle;
let file;
let contents;
document.getElementById('someButton').addEventListener('click', async () => {
  try {
    fileHandle = await window.showOpenFilePicker({
      description: 'texts',
      types: [{
        accept: {
          'text/plain': ['.txt'],
        }
      }],
    });
    file = await fileHandle[0].getFile();
    contents = await file.text();
    //alert(contents);
    let ptr = allocateUTF8(contents);
    _print_string(ptr);
    _free(ptr);
  } catch (e) {
    console.log(e);
  }
});