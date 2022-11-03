const gulp = require('gulp')
const series = gulp.series

function antes1(cb) {
    console.log('Tarefa antes 1!')
    return cb()
}
function antes2(cb) {
    console.log('Tarefa antes 2!')
    return cb()
}

function copiar(cb) {
    // gulp.src(['pastaA/arquivo1..txt', pastaB])

    gulp.src('pastaA/**/*.txt')
        // .pipe(imagePelaMetade())
        // .pipe(imagePretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))    
    return cb()
}

function fim(cb) {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(antes1,antes2,copiar,fim)