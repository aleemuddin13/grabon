
let data = [{
  id: "c",
  width: 500,
  height: 500,
  top:"0px",
  left:"0px",
  data: [{
    type: "IMAGE",
    url: "images/blank_tshirtb.png",
    filters: [{
      type: "TINT",
      color: "#0077CC",
      opacity: 0.6
    }]
  }]
},{
  id: "c2",
  width: 150,
  height: 150,
  top:"180px",
  left:"180px",
  data: [
    {
      type: "TEXT",
      text: "Hello World",
      fontSize: 40
    }
  ]
}]

// for(d of data){
//   let c = helper.createCanvas(d)
//   for(obj of d.data){
//     switch (obj.type) {
//       case "IMAGE":
//         attachImage(c, obj)
//         break;
//       case "TEXT":
//         attachText(c, obj)
//       default:
//
//     }
//   }
// }

function attachText(c, obj){
  let text = new fabric.Text(obj.text, obj);
  c.add(text)
}

function attachImage(c, obj){
  let image = new Image()
  image.onload = function(){
    let img = new fabric.Image(image);
    if(obj.filters){
      for(filter of obj.filters){
        switch (filter.type) {
          case "TINT":
            img.filters.push(new fabric.Image.filters.Tint(filter))
            break;
          default:
        }
      }
      img.applyFilters()
    }
    c.add(img);
    c.centerObject(img);
  }
  image.src = "images/blank_tshirtb.png"
}

let canvas = helper.createCanvas(data[0])
let c2= helper.createCanvas(data[1])
// var canvas = new fabric.Canvas('c');
var text = new fabric.Text('hello world', {
fontSize: 30,
});
c2.add(text)
var imgs = new Image();

imgs.onload = function(){
  var img = new fabric.Image(imgs, {

  });
  // image  has been loaded
  img.filters.push( new fabric.Image.filters.Tint({color:"#0077CC", opacity:0.6}));

  // apply filters and re-render canvas when done
  img.applyFilters();
  canvas.add(img);
  canvas.centerObject(img);
  // canvas.add(text)
};
 imgs.crossOrigin="anonymous";
imgs.src = "images/blank_tshirtb.png";

// fabric.Image.fromURL('images/blank_tshirtb.png', function(img) {
//   img.crossOrigin = "Anonymous";
//   // add filter
//   img.filters.push(new fabric.Image.filters.Grayscale());
//
//   // apply filters and re-render canvas when done
//   img.applyFilters();
//   // add image onto canvas (it also re-render the canvas)
//   canvas.add(img);
// });
// "add" rectangle onto canvas
// canvas.add(rect, rect2);
