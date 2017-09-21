import React from "react"

const AddBucketModal = (props) => (
	<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<h4 className="modal-title" id="myModalLabel">{props.title}</h4>
				</div>
				<div className="modal-body">
					<form>
						<input name="bucket_name" id="bucket_name" className="form-control" value={props.bucketName} onChange={props.onInput}/>
					</form>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
					<button type="button" className="btn btn-primary" onClick={props.onSaveBucket}>Save</button>
				</div>
			</div>
		</div>
	</div>

)

export default AddBucketModal

