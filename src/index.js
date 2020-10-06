module.exports = function toReadable (number) {
    let hund = Math.floor(number / 100);
    let doz = Math.floor((number - hund * 100) / 10);
    let un = number - hund * 100 - doz * 10;

    let result = [];

    if (number === 0) return 'zero';

    if (hund) {
        switch (hund) {
            case 9:
                result.push('nine');
                break;
            case 8:
                result.push('eight');
                break;
            case 7:
                result.push('seven');
                break;
            case 6:
                result.push('six');
                break;
            case 5:
                result.push('five');
                break;
            case 4:
                result.push('four');
                break;
            case 3:
                result.push('three');
                break;
            case 2:
                result.push('two');
                break;
            case 1:
                result.push('one');
                break;
        }
        result.push('hundred')
    }

    if (doz) {
        switch (doz) {
            case 9:
                result.push('ninety');
                break;
            case 8:
                result.push('eighty');
                break;
            case 7:
                result.push('seventy');
                break;
            case 6:
                result.push('sixty');
                break;
            case 5:
                result.push('fifty');
                break;
            case 4:
                result.push('forty');
                break;
            case 3:
                result.push('thirty');
                break;
            case 2:
                result.push('twenty');
                break;
            case 1:
                switch (un) {
                    case 9:
                        result.push('nineteen');
                        break;
                    case 8:
                        result.push('eighteen');
                        break;
                    case 7:
                        result.push('seventeen');
                        break;
                    case 6:
                        result.push('sixteen');
                        break;
                    case 5:
                        result.push('fifteen');
                        break;
                    case 4:
                        result.push('fourteen');
                        break;
                    case 3:
                        result.push('thirteen');
                        break;
                    case 2:
                        result.push('twelve');
                        break;
                    case 1:
                        result.push('eleven');
                        break;
                    case 0:
                        result.push('ten');
                        break;
                }
        }
    }

    if (doz!= 1) {
        switch (un) {
            case 9:
                result.push('nine');
                break;
            case 8:
                result.push('eight');
                break;
            case 7:
                result.push('seven');
                break;
            case 6:
                result.push('six');
                break;
            case 5:
                result.push('five');
                break;
            case 4:
                result.push('four');
                break;
            case 3:
                result.push('three');
                break;
            case 2:
                result.push('two');
                break;
            case 1:
                result.push('one');
                break;
        }
    }
    return result.join(' ')
}
