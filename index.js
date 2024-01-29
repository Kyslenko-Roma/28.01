const nameUser = prompt('Enter your name');

if (nameUser === '' || nameUser === null) {
    console.log('Error');
} else {
    console.log(`Your name is ${nameUser}`);

    const ageUser = prompt('Enter your age');

    if (ageUser === '' || ageUser === null || !isNaN(+ageUser)) {
        console.log('Error');
    } else if (ageUser <= 1 || ageUser >= 150) {
        console.log('Error');
    } else {
        console.log(`Your age is ${+ageUser}`);

        const messageUser = prompt('Enter your message');

        if (ageUser < 18 && messageUser === 'fuck') {
            console.log('Не лайся');
        } else {
            console.log(`Your message is ${messageUser}`)
        }
    }
}