import React from 'react';
import { useParams } from 'react-router-dom';
import RatingForm from '../ratingForm';

const RatingFormWrapper = (props) => {
    const params = useParams();
    return ( 
        <RatingForm {...props} params={params} />
     );
}
 
export default RatingFormWrapper;