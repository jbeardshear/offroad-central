var items = [
  {
    brand: 'Leatt',
    model: 'GPX 6.5 Helmet',
    price: '$599',
    picture: 'leatthelmet.jpg'
  },
  {
    brand: 'Fox Racing',
    model: 'V3 Helmet - A1 Moth LE',
    price: '$459',
    picture: 'foxhelmet.jpg'
  },
  {
    brand: 'Troy Lee Designs',
    model: 'SE4 Composite Helmet - Freedom',
    price: '$450',
    picture: 'tldhelmet.jpg'
  },
  {
    brand: 'Bell',
    model: 'Moto-9 Carbon Flex Helmet - Day in the Dirt',
    price: '$699',
    picture: 'bellhelmet.jpg'
  },
  {
    brand: '6D Helmets',
    model: 'ATR-1 Helmet - Camo',
    price: '$550',
    picture: '6Dhelmet.jpg'
  },
  {
    brand: 'Just1',
    model: 'J12 Carbon Helmet - Aster Italy',
    price: '$320',
    picture: 'just1helmet.jpg'
  }
]

function createItem(item) {
  var $col = document.createElement('div')
  $col.classList.add('col-xs-6')

  var $thumbnail = document.createElement('div')
  $thumbnail.classList.add('thumbnail')

  var $picture = document.createElement('img')
  $picture.setAttribute('src', item.picture)

  var $caption = document.createElement('div')
  $caption.classList.add('caption')

  var $brand = document.createElement('h2')
  $brand.textContent = item.brand

  var $model = document.createElement('p')
  $model.textContent = item.model

  var $button = document.createElement('p')

  var $buttonA = document.createElement('a')
  $buttonA.classList.add('btn', 'btn-primary')
  $buttonA.setAttribute('role', 'button')
  $buttonA.setAttribute('id', 'hideDetails')
  $buttonA.textContent = ('Show Details')

  $col.appendChild($thumbnail)
  $thumbnail.appendChild($picture)
  $thumbnail.appendChild($caption)
  $caption.appendChild($brand)
  $caption.appendChild($model)
  $caption.appendChild($button)
  $button.appendChild($buttonA)

  return $col
}

for (i = 0; i < items.length; i++) {
  var $item = createItem(items[i])
  var $items = document.querySelector('#showItems')
  $items.appendChild($item)
}

document.getElementById('showItems').addEventListener('click', detailView)

function detailView(event) {
  if (event.target.tagName === 'A') {
    document.querySelector('#showItems').style.display = 'none'
  }

}



//
// var app = {
//   cart: {
//     quantity: 0
//     items: []
//   }
// }
