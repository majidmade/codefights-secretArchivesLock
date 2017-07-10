// this is the entry:
function secretArchivesLock(lock, actions) {
    
    // -- cells --
    const isEmptyCell = cell => (cell === '.');
    const isOccupiedCell = cell => !isEmptyCell(cell);
    
    // -- rows --
    const moveLeft = row => [...row.filter(isOccupiedCell), ...row.filter(isEmptyCell)];
    const moveRight = row => [...row.filter(isEmptyCell), ...row.filter(isOccupiedCell)];
    
    // -- columns --
    const getColumn = matrix => columnIndex => matrix.map(row => row[columnIndex]);
    const setColumn = matrix => columnIndex => newColumn => matrix.map(row => {
        row[columnIndex] = newColumn.shift();
        return row;
    })
    const byColumn = matrix => moveFn => matrix[0].reduce((matrix, _, columnIndex) => {
        const movedColumn = moveFn(getColumn(matrix)(columnIndex))
        return setColumn(matrix)(columnIndex)(movedColumn)
    }, matrix);
    
    // -- actions --
    const actionMap = {
        'L': matrix => matrix.map(moveLeft),
        'R': matrix => matrix.map(moveRight),
        'U': matrix => byColumn(matrix)(moveLeft),
        'D': matrix => byColumn(matrix)(moveRight)
    }
    const isRedundantAct = actionPair => actionPair[0] === actionPair[1] || [ 'LR', 'RL', 'UD', 'DU' ].includes(actionPair.join(''));
    const optimizeActions = (actions, nextAction) => {
        const prevAction = actions.pop();
        prevAction && !isRedundantAct([prevAction, nextAction]) && actions.push(prevAction);
        actions.push(nextAction);
        return actions;
    };
    const performActions = (matrix, action) => actionMap[action](matrix);
    
    // -- execute! --
    return actions
        .split('')
        .reduce(optimizeActions, [])
        .reduce(performActions, lock.map(row => row.split('')))
        .map(row => row.join(''));

}