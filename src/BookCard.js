
export const BookCard = ({ book }) => {
    const { title, name, author, description, category } = book;

    return (
        <div className="bg-light border p-4 m-2">
            <h4>Title: {title}</h4>
            <p>Author: {author}</p>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
        </div>
    )
}
