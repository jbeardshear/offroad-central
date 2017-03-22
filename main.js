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
  $buttonA.setAttribute('data-item-id', item.id)
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
    console.log(event.target.dataset.itemId)
  }

}



//
// var app = {
//   cart: {
//     quantity: 0
//     items: []
//   }
// }
