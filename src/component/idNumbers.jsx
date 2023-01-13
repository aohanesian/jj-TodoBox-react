export default function* idNumbers() {
    let x = 0;
    while (true) {
        yield Symbol(++x);
    }
}