import PocketBase from 'pocketbase';

const pb = new PocketBase('http://128.0.0.1:8090')

export const updateDatabase = (title, numberOfChanges) => pb.collection('testing').update('n1kvy882szoh0v9', {
    Title: title,
    number_of_changes: numberOfChanges,
});

