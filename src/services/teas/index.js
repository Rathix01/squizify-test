import { v4 as uuidv4 } from 'uuid';
import { db, snapshotToArray } from '../firebase';

export const getAllCurrentTeas = async (callback) => {
  let teasRef = db.collection('teas')
  let teas = await teasRef.where('active', '==', true).get();
  callback(snapshotToArray(teas));
};

export const getAllCurrentExtras = async (callback) => {
  let teasRef = db.collection('extras')
  let teas = await teasRef.where('active', '==', true).get();
  callback(snapshotToArray(teas));
};

export const saveTeaOrder = async (order, callback) => {
	const id = uuidv4();
	let ordersRef = db.collection('orders');
	await ordersRef.doc(id).set({ id, ...order }, { merge: true });
	callback(order);
}