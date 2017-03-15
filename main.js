var items = [
  {
    brand: 'Leatt',
    model: '2017 GPX 6.5 Helmet',
    price: '$599'
    picure: 'leatthelmet.jpg'
  },
  {
    brand: 'Fox Racing',
    model: 'V3 Helmet - A1 Moth LE',
    price: '$459'
    picture: 'foxhelmet.jpg'
  },
  {
    brand: 'Troy Lee Designs',
    model: 'SE4 Composite Helmet - Freedom',
    price: '$450'
    picture: 'tldhelmet.jpg'
  },
  {
    brand: 'Bell',
    model: 'Moto-9 Carbon Flex Helmet - Day in the Dirt',
    price: '$699'
    picture: 'bellhelmet.jpg'
  },
  {
    brand: '6D Helmets',
    model: 'ATR-1 Helmet - Camo',
    price: '$550'
    picture: '6Dhelmet.jpg'
  },
  {
    brand: 'Just1',
    model: 'J12 Carbon Helmet - Aster Italy',
    price: '$320'
    picture: 'just1helmet.jpg'
  }
]

function createItem[i] {
  var $col = document.createElement('div')
  $col.classList.add('col-xs-6')

  var $thumbnail = document.createElement('div')
  $thumbnail.classList.add('thumbnail')

  var $picture = document.createElement('img')
  $picture.setAttribute('src', 'items[i].picture')

  var $caption = document.createElement('div')
  $caption.classList.add('caption')

  var $brand = document.createElement('h2')
  $brand.textContent = items[i].brand

  var $model = document.createElement('p')
  $model.textContent = items[i].model

  var $button = document.createElement('p')

  var $buttonA = document.createElement('a')
  $buttonA.classList.add('btn', 'btn-primary')
  $buttonA.setAttribute('role', 'button')
  $buttonA.textContent = ('See More')

  $col.appendChild($thumbnail)
  $thumbnail.appendChild($picture)
  $thumbnail.appendChild($caption)
  $caption.appendChild($brand)
  $caption.appendChild($model)
  $caption.appendChild($button)
  $button.appendChild($buttonA)

  return $col
}

for (i = 0, i < items.length, i++)
  createItem[i]

function {
  
}


//   <div class="container-fluid">
//     <div class="page-header">
//       <h1 id="logo">Brain Buckets <small>Protect your noggin!</small></h1>
//     </div>
//     <div class="row">
//       <div class="col-xs-6" id="helmets">
//         <div class="thumbnail">
//           <img src="leatthelmet.jpg">
//           <div class="caption">
//             <h2>Leatt</h2>
//             <p>GPX 6.5 Helmet</p>
//             <p><a href="#" class="btn btn-primary" role="button">See More</a></p>
//           </div>
//         </div>
//       </div>
//         <div class="col-xs-6" id="boots">
//           <div class="thumbnail">
//             <img src="foxhelmet.jpg">
//             <div class="caption">
//               <h2>Fox Racing</h2>
//               <p>V3 Helmet - A1 Moth LE</p>
//               <p><a href="#" class="btn btn-primary" role="button">See More</a></p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div class="col-xs-6" id="jerseys">
//         <div class="thumbnail">
//           <img src="tldhelmet.jpg">
//           <div class="caption">
//             <h2>Troy Lee Designs</h2>
//             <p>SE4 Composite Helmet - Freedom</p>
//             <p><a href="#" class="btn btn-primary" role="button">See More</a></p>
//           </div>
//         </div>
//       </div>
//         <div class="col-xs-6" id="pants">
//           <div class="thumbnail">
//             <img src="bellhelmet.jpg">
//             <div class="caption">
//               <h2>Bell</h2>
//               <p>Moto-9 Carbon Flex Helmet - Day in the Dirt</p>
//               <p><a href="#" class="btn btn-primary" role="button">See More</a></p>
//             </div>
//           </div>
//         </div>
//       <div class="col-xs-6" id="goggles">
//         <div class="thumbnail">
//           <img src="6dhelmet.jpg">
//           <div class="caption">
//             <h2>6D Helmets</h2>
//             <p>ATR-1 Helmet - Camo</p>
//             <p><a href="#" class="btn btn-primary" role="button">See More</a></p>
//           </div>
//         </div>
//       </div>
//         <div class="col-xs-6" id="gloves">
//           <div class="thumbnail">
//             <img src="just1helmet.jpg">
//             <div class="caption">
//               <h2>Just1</h2>
//               <p>J12 Carbon Helmet - Aster Italy</p>
//               <p><a href="#" class="btn btn-primary" role="button">See More</a></p>
//             </div>
//           </div>
//         </div>
//   </div>
