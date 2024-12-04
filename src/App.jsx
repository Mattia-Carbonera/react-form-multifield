import { useState } from "react";
import "./css/App.css";
import articles from "./db/articles";

function App() {
  const filteredPublishedArticles = articles.filter((artic) => {
    return artic.published == "yes";
  });

  const [articlesList, setArticleList] = useState(filteredPublishedArticles);

  // articles create
  const [articleField, setArticleField] = useState({
    title: "",
    author: "",
    published: "yes",
    image: "",
    category: "",
    content: "",
  });

  // name editor articles
  const [inputChange, setInputChange] = useState("");

  // click handler
  const handleInputChange = (e) => {
    console.log(e.target.value);
    const newArticlesData = {
      ...articleField,
      [e.target.title]: e.target.title.value,
      [e.target.author]: e.target.author.value,
      [e.target.published]: e.target.published.value,
      [e.target.image]: e.target.image.value,
      [e.target.category]: e.target.category.value,
      [e.target.content]: e.target.content.value,
    };

    console.log(e.target.title);
    setArticleField(newArticlesData);
  };

  // submit handler fonm
  const articlesListSubmitHandler = (e) => {
    e.preventDefault();

    const newArticleList = [...articlesList];
    newArticleList.push({
      title: e.target.title.value,
      author: e.target.author.value,
      published: "yes",
      image: e.target.image.value,
      category: e.target.category.value,
      content: e.target.content.value,
    });

    setArticleList(newArticleList);
  };

  // edit item handler
  const editItem = (modifyArticle, index) => {
    // const modifyArticleList = [...articlesList];
    // const newModifyArray = modifyArticleList.map((articleItem) =>
    //   articleItem == modifyArticle
    //     ? {
    //         title: "a",
    //         author: "s",
    //         published: "yes",
    //         image: "d",
    //         category: "f",
    //         content: "g",
    //       }
    //     : articleItem
    // );
    // setArticleList(newModifyArray);
  };

  // delete title handler
  const deleteItemHandler = (articleDeleted) => {
    const deletedArticles = articlesList.filter((article) => {
      return article != articleDeleted;
    });

    setArticleList(deletedArticles);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Form</h1>
        </div>

        <form onSubmit={articlesListSubmitHandler}>
          <input
            type="text"
            name="title"
            value={articleField.title}
            onChange={handleInputChange}
            placeholder="Titolo"
          />
          <input
            type="text"
            name="author"
            value={articleField.author}
            onChange={handleInputChange}
            placeholder="Autore"
          />
          <input
            type="text"
            name="image"
            value={articleField.image}
            onChange={handleInputChange}
            placeholder="image"
          />
          <input
            type="text"
            name="category"
            value={articleField.category}
            onChange={handleInputChange}
            placeholder="category"
          />
          <input
            className="content-input"
            type="text"
            name="content"
            value={articleField.content}
            onChange={handleInputChange}
            placeholder="content"
          />

          <button>Crea</button>
        </form>

        <hr />

        <div className="articles-section">
          <ul>
            {articlesList.map((article, index) => (
              <li key={index}>
                <div className="article-container">
                  <div className="article-content">
                    <h2>{article.title}</h2>
                    <span>{article.author}</span>
                    <span>{article.published}</span>
                    <span>{article.image}</span>
                    <span>{article.category}</span>
                    <span>{article.content}</span>
                  </div>
                  <button
                    onClick={() => deleteItemHandler(article)}
                    className="button"
                  >
                    <i className="fa-solid fa-trash trash"></i>
                  </button>

                  <div>
                    <button
                      onClick={() => editItem(article, index)}
                      className="button"
                    >
                      <i className="fa-solid fa-pen-to-square edit"></i>
                    </button>
                    <input
                      type="text"
                      onChange={handleInputChange}
                      name="modify"
                      placeholder="Modifica"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
