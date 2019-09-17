import * as jwt from 'jsonwebtoken';
import {config} from '../config';


function authentication(mutationToken, secondToken, TraineeId) {
  const mutationDetails = jwt.verify(mutationToken, config.SECRET_KEY);
  console.log('mu>>>>>>',mutationDetails);
  
  const { role: mutationRole, originalId: mutationId } = mutationDetails;
  const subscriptionDetails = jwt.verify(secondToken, config.SECRET_KEY);
  console.log('su>>>>>>',subscriptionDetails);
  const { role: subscriptionRole, originalId: subscriptionId } = subscriptionDetails;

  if (subscriptionRole === 'head-trainer') {
    return true;
  }
  else if (mutationId === subscriptionId) {
    return true;
  }
  else if (TraineeId === subscriptionId) {
    return true;
  }
  return false;
}
export default authentication;
