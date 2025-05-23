
function Category({id, title, onCategoryClick}) {
    return (
        <>
        <div key={id} onClick={() => onCategoryClick(id)}>{title}</div>
        </>
    );
}

export default Category;