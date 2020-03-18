import React from 'react'
import { connect } from 'react-redux';
import { getImages } from '../actions/imgActions';

function ImageList(props) {

    const handleGetDogs = e => {
        e.preventDefault();
        props.getImages();
    };

    return (
        <>
        <div>
            <h1>Everyone Loves Dogs</h1>
        </div>
       
        {props.isFetchingData ? (
        <div>Looking for dogs....</div>
      ) : (
        <button onClick={handleGetDogs}>Call Dogs</button>
      )}

        {props.data.map(image => (
            <div>
                <img className="dogImg" key={image} src={image} />
            </div>
        ))}
        {props.error && <p className="error">{props.error}</p>} 
        </>
    );
}

const mapStateToPRops = state => ({
    data: state.data,
    error: state.error,
    isFetchingData: state.isFetchingData
});

export default connect (
    mapStateToPRops,
    { getImages }
)(ImageList);
