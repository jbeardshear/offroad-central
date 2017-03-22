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
  $buttonA.textContent = 'Show Details'

  $col.appendChild($thumbnail)
  $thumbnail.appendChild($picture)
  $thumbnail.appendChild($caption)
  $caption.appendChild($brand)
  $caption.appendChild($model)
  $caption.appendChild($button)
  $button.appendChild($buttonA)

  return $col
}

function createDetail(item) {
  var $con = document.createElement('div')
  var $row = document.createElement('div')

  $con.classList.add('container')
  $row.classList.add('row')

  $con.appendChild($row)
  $row.appendChild(createCarousel(item.images))
  $row.appendChild(createItemInfo(item))
  $con.appendChild(createItemDescription(item))
  return $con
}

function createItemInfo (itemInfo) {
  var $col = document.createElement('div')
  var $brand = document.createElement('h1')
  var $model = document.createElement('h2')
  var $price = document.createElement('h2')
  var $addToCartButton = document.createElement('button')

  $col.classList.add('col-md-4', 'offset-md-3')
  $col.id = 'itemInfo'
  $brand.id = 'brandName'
  $brand.textContent = itemInfo.brand
  $model.id = 'modelName'
  $model.textContent = itemInfo.model
  $price.id = 'price'
  $price.textContent = itemInfo.price
  $addToCartButton.setAttribute('type', 'button')
  $addToCartButton.classList.add('btn', 'btn-info', 'btn-lg')
  $addToCartButton.id = 'addToCartButton'
  $addToCartButton.textContent = 'Add to Cart'

  $col.appendChild($brand)
  $col.appendChild($model)
  $col.appendChild($price)
  $col.appendChild($addToCartButton)

  return $col
}

function createCarousel (images) {
  var $col = document.createElement('div')
  var $carouselSlide = document.createElement('div')
  var $carouselInner = document.createElement('div')
  var $controlNext = document.createElement('a')
  var $controlPrev = document.createElement('a')
  var $prevIcon = document.createElement('span')
  var $nextIcon = document.createElement('span')
  var $srOnlyPrev = document.createElement('span')
  var $srOnlyNext = document.createElement('span')

  $col.classList.add('col-md-5')
  $carouselSlide.classList.add('carousel', 'slide')
  $carouselSlide.id = 'carouselExampleIndicators'
  $carouselSlide.setAttribute('data-ride', 'carousel')
  $carouselInner.classList.add('carousel-inner')
  $carouselInner.setAttribute('role', 'listbox')
  $controlPrev.classList.add('carousel-control-prev')
  $controlPrev.setAttribute('href', '#carouselExampleIndicators')
  $controlPrev.setAttribute('role', 'button')
  $controlPrev.setAttribute('data-slide', 'prev')
  $controlNext.classList.add('carousel-control-next')
  $controlNext.setAttribute('href', '#carouselExampleIndicators')
  $controlNext.setAttribute('role', 'button')
  $controlNext.setAttribute('data-slide', 'next')
  $prevIcon.classList.add('carousel-control-prev-icon')
  $prevIcon.setAttribute('aria-hidden', 'true')
  $nextIcon.classList.add('carousel-control-next-icon')
  $nextIcon.setAttribute('aria-hidden', 'true')
  $srOnlyPrev.classList.add('sr-only')
  $srOnlyPrev.textContent = 'Previous'
  $srOnlyNext.classList.add('sr-only')
  $srOnlyNext.textContent = 'Next'


  for (var i = 0; i < images.length; i++) {
    var $carouselItem = document.createElement('div')
    var $image = document.createElement('img')

    $carouselItem.classList.add('carousel-item')
    if (i === 0) {
      $carouselItem.classList.add('active')
    }
    $image.classList.add('d-block', 'img-fluid')
    $image.setAttribute('src', images[i].link)

    $carouselItem.appendChild($image)
    $carouselInner.appendChild($carouselItem)
  }

  $col.appendChild($carouselSlide)
  $carouselSlide.appendChild($carouselInner)
  $carouselSlide.appendChild($controlPrev)
  $carouselSlide.appendChild($controlNext)
  $controlPrev.appendChild($prevIcon)
  $controlPrev.appendChild($srOnlyPrev)
  $controlNext.appendChild($nextIcon)
  $controlNext.appendChild($srOnlyNext)

  return $col
}

function createItemDescription (itemDescription) {
  var $row = document.createElement('div')
  var $col = document.createElement('div')
  var $panel = document.createElement('div')
  var $panelBody = document.createElement('div')
  var $description = document.createElement('h1')
  var $descriptionBody = document.createElement('p')

  $row.classList.add('row')
  $col.classList.add('col-md-12')
  $col.id = 'detailsPanel'
  $panel.classList.add('panel', 'panel-default')
  $panelBody.classList.add('panel-body')
  $description.textContent = 'Description'
  $descriptionBody.id = 'descriptionBody'
  $descriptionBody.textContent = itemDescription.description

  $row.appendChild($col)
  $col.appendChild($panel)
  $panel.appendChild($panelBody)
  $panel.appendChild($description)
  $panel.appendChild($descriptionBody)

  return $row
}

for (var i = 0; i < items.length; i++) {
  var $item = createItem(items[i])
  var $items = document.querySelector('#showItems')
  $items.appendChild($item)
}

document.getElementById('showItems').addEventListener('click', detailView)

function detailView(event) {
  if (event.target.tagName === 'A') {
    var itemId = event.target.dataset.itemId
    var currentItem = findItem (itemId, items)
    var $details = createDetail(currentItem)
    var $showDetails = document.getElementById('showDetails')
    $showDetails.appendChild($details)
    showView('showDetails')
  }
}

function findItem (itemId, items) {
  for (var i = 0; i < items.length; i++) {
    var itemNumber = items[i].id.toString ()
    if (itemId === itemNumber) {
      return items[i]
    }
  }
}

function showView (viewId) {
  var views = document.getElementsByClassName('view')
  for (var i = 0; i < views.length; i++){
     if (viewId === views[i].id) {
       views[i].classList.remove('hidden')
     }
     else {
       views[i].classList.add('hidden')
     }
   }
}


//
// var app = {
//   cart: {
//     quantity: 0
//     items: []
//   }
// }
