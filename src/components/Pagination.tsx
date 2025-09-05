interface Props {
currentPage: number;
totalPages: number;
onPageChange: (page: number) => void;
}


export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
return (
<div className="pagination">
<button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Prev</button>
<span>Page {currentPage} of {totalPages}</span>
<button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Next</button>
</div>
);
}