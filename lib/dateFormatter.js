const meses = {
    '01': 'Enero',
    '02': 'Febrero',
    '03': 'Marzo',
    '04': 'Abril',
    '05': 'Mayo',
    '06': 'Junio',
    '07': 'Julio',
    '08': 'Agosto',
    '09': 'Setiembre',
    '10': 'Octubre',
    '11': 'Noviembre',
    '12': 'Diciembre',
}

const acortado = {
    '01': 'ene.',
    '02': 'feb.',
    '03': 'mar.',
    '04': 'abr.',
    '05': 'may.',
    '06': 'jun.',
    '07': 'jul.',
    '08': 'ago.',
    '09': 'set.',
    '10': 'oct.',
    '11': 'nov.',
    '12': 'dic.',
}

function clean(time) {
    return time
        .toString()
        .split('')
        .slice(11, 23)
        .join('')
        .split('-')
}

export function format(time) {
    let clear = time
        .split('')
        .slice(0, 10)
        .join('')
        .split('-')
    let temp = `${clear[2]} ${acortado[clear[1]]} ${clear[0]}`
    return temp
}
