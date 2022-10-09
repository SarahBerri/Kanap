fetch("http://localhost:3000/api/products")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    return addProducts(data)
  })

  // Fonction pour appeler les produits
function addProducts(canapés) {
// Création d'une boucle pour récupérer chaque élément du tableau
  canapés.forEach((canapés) => {
    // Création d'une constante pour tout regrouper en une seule ligne
    const { _id, imageUrl, altTxt, name, description } = canapés
    const anchor = addAnchor(_id)
    const article = document.createElement("article")
    const image = addImage(imageUrl, altTxt)
    const h3 = addTitre(name)
    const p = addDescription(description) 
    
    appendElementsToArticle(article, image, h3, p)
    appendArticleToAnchor(anchor, article)
  })
}

function appendElementsToArticle(article, image, h3, p) {
  article.appendChild(image)
  article.appendChild(h3)
  article.appendChild(p)
}

function addAnchor(id) {
  const anchor = document.createElement("a")
  anchor.href = "./product.html?id=" + id
    return anchor
}

function appendArticleToAnchor(anchor, article) {
  const items = document.querySelector("#items")
  if(items != null) {
    items.appendChild(anchor)
    anchor.appendChild(article)
  }
}

function addImage(imageUrl, altTxt) {
  const image = document.createElement("img")
  image.src = imageUrl
  image.alt = altTxt
  image.removeAttribute = ("title")
  image.removeAttribute = ("style")
    return image
}

function addTitre(name) {
  const h3 = document.createElement("h3")
  h3.textContent = name
  h3.classList.add("productName")
    return h3
}

function addDescription(description) {
  const p = document.createElement("p")
  p.textContent = description
  p.classList.add("productDescription")
    return p
}
