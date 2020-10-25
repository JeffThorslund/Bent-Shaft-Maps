const indexCalculator = (editingReducer) => {

    if (editingReducer.riverIndex === null) {
        return 0
    }

    else if (editingReducer.sectionIndex === null) {
        return 1
    }

    else if (editingReducer.rapidIndex === null) {
        return 2
    }

    else {
        return null
    }
};

export default indexCalculator;
