const getAllWorkouts = (req,res) => {
    res.send('Get workout ');
};

const getOneWorkout = (req,res) => {
    res.send(`Get workout ${req.params.workouts}`);
};

const createNewWorkout = (req,res) => {
    res.send(` create workout ${req.params.workouts}`);
};

const updateOneWorkout = (req,res) => {
    res.send(`update workout ${req.params.workouts}`);
};

const deleteOneWorkout = (req,res) => {
    res.send(`Delete workout ${req.params.workouts}`);
};

module.exports = {
    getAllWorkouts,
    getOneWokout,
    createOneWokout,
    updateOneWokout,
    deleteOneWokout
}