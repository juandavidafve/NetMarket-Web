import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import { useEffect } from 'react';

export default function Error({ mensaje, modalTrigger }) {

    useEffect(() => {
        if (modalTrigger > 0) {
            toggle();
        }
    }, [mensaje, modalTrigger])

    function toggle() {
        const modal = new bootstrap.Modal(document.getElementById('modalError'));
        modal.toggle();
    }

    return (
        <div className="modal" tabIndex="-1" id='modalError'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Error</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{mensaje}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}