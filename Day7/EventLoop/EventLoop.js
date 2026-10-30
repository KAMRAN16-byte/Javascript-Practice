console.log('Program Started');

function task1() {
    console.log('Task 1 Started');
    console.log('Task 1 InProgress');
    console.log('Task 1 Finished');
}

function task2() {
    console.log('Task 2 Started');
    setTimeout(() => {
        console.log('Task 2 InProgress');
        console.log('Task 2 Finished');
    })
}

function task3() {
    console.log('Task 3 Started');
    Promise.resolve().then((resolve) => {
        console.log('Task 3 InProgress');
        console.log('Task 3 Finished');
    })
}

task1();
task2();
task3();

console.log('program end')