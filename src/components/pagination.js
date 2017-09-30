import React from "react"

const CreatePages = (props) => {
	if (props.paginate) {
		if (props.prev_url) {
			return (
				<li className="page-item">
					<a className="page-link" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						<span className="sr-only">Previous</span>
					</a>
				</li>
			)
		}

		let pages = props.paginate.pages
		let links = Array.from(Array(Number(pages)).keys())

		let elements = links.map((value, index) => {
			let pag = index + 1
			return (<li key={index} className="page-item" onClick={() => props.onMovePage(pag)}><a className="page-link" >{pag}</a></li>)
		})

		return elements
	}


}

const Pagination = (props) => (
	<nav aria-label="Page navigation">
		<ul className="pagination">
			{props.paginate.prev_url &&

				<li className="page-item" id="prev_page" onClick={() => props.onMovePage(props.paginate.page - 1)}>
					<a className="page-link" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						<span className="sr-only">Previous</span>
					</a>
				</li>

			}

			{
				CreatePages(props)
			}


			{props.paginate.next_url &&

				<li className="page-item" id="next_page" onClick={() => props.onMovePage(props.paginate.page + 1)}>
					<a className="page-link" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
						<span className="sr-only">Next</span>
					</a>
				</li>

			}

		</ul>
	</nav>
)

export default Pagination