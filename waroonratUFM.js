let uploadFile ={}

$('input[type="file"]').on('change',function(e){   
  var x = e.target
  console.log(x)
  console.log(this)
  
  let files = []
        for(var i=0; i<x.files.length; i++){
     files.push(x.files[i])
  }
  console.log(files)
  files.forEach((file,i)=>{
    let reader = new FileReader()
    reader.onloadend = (e)=>{
      uploadFile[x.getAttribute('id')+(i+1)]={
        data:e.target.result.split(',')[1],
        name:file.name,
        type:file.type
      }
    }
    reader.readAsDataURL(file)
   })
  })

  //  $('input[type="file"]').on('change',function(e){  
  // for(var i=0; i<$(this)[0].files.length; i++){
  //    files.push($(this)[0].files[i])
  // }
  // files.forEach((file,i)=>{
  //   let reader = new FileReader()
  //   reader.onloadend = (e)=>{
  //     console.log("dddd",uploadFile[$(this).attr('id')+(i+1)])
  //     uploadFile[$(this).attr('id')+(i+1)]={
  //       data:e.target.result.split(',')[1],
  //       name:file.name,
  //       type:file.type
  //     }
  //   }
  //   reader.readAsDataURL(file)
  //  })
  //  })  

// document.addEventListener('DOMContentLoaded', (ev) =>{

// showFileIcon('myFile1','img1')
// showFileIcon('myFile2','img2')
// showFileIcon('myFile3','img3')
// showFileIcon('myFile4','img4')

// });

// function showFileIcon(fileID, imgID){
// let input = document.getElementById(fileID);
// input.addEventListener('change', (ev) =>{
//   console.dir( input.files[0] );
//   let img = document.getElementById(imgID);
//   img.style.display = "block";
//   img.src = input.files[0].type.indexOf("image/") > -1? window.URL.createObjectURL(input.files[0]):
//             input.files[0].type.indexOf("/pdf") > -1? "http://uapminovasi.com/wp-content/uploads/2018/09/pdf-logo-15.jpg":
//             input.files[0].type.indexOf(".sheet") > -1? "https://gadoin.com/wp-content/uploads/2021/05/excel-logo-0.jpg":
//             input.files[0].type.indexOf(".document") > -1?
//             "https://logos-world.net/wp-content/uploads/2020/03/Microsoft-Word-Logo-2013-2019.png":
//             "https://iconape.com/wp-content/png_logo_vector/document.png";
// })
// };
