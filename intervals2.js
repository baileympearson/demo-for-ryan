const { promisify } = require('util');

/**
 * loops forever, waiting a random amount between 0 and 10s
 */
function waitRandomTime() {
    const delay = Math.random() * 10000
    console.log(`waiting for ${delay}ms`);

    setTimeout(() => {
        waitRandomTime()
    }, delay)
}

/**
 * loops forever, waiting a random amount between 0 and 10s but done async (recommended)
 */
async function waitRandomTimeAsync() {
    const sleep = promisify(setTimeout);

    for (;;) {
        const delay = Math.random() * 10000
        console.log(`waiting for ${delay}ms`);
        await sleep(delay);
    }
}

// waitRandomTime()
waitRandomTimeAsync()