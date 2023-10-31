const { crud } = require("./crud-repository");
const { show, movie, theatre, city } = require("../models");
const { attribute } = require("../utils/sequelize");
const customError = require("../utils/errors");
const { StatusCodes } = require("http-status-codes");
const db = require("../models");
const { addRowLockOnShows } = require("./raw-query");

class showRepository extends crud {
  constructor() {
    super(show);
  }
  async find(id) {
    try {
      const response = await show.findByPk(id, {
        include: [
          { model: movie, require: true, attributes: attribute },
          {
            model: theatre,
            require: true,
            attributes: attribute,
            include: [{ model: city, attributes: attribute }],
          },
        ],
      });
      return response;
    } catch (error) {
      // let explanation = [];
      // error.errors.forEach((err) => {
      //     explanation.push(err.message);
      // });
      // throw new customError(explanation, StatusCodes.BAD_REQUEST)
      throw error;
    }
  }
  async findAll() {
    try {
      const response = await show.findAll({
        include: [
          { model: movie, require: true, attributes: attribute },
          {
            model: theatre,
            require: true,
            attributes: attribute,
            include: [{ model: city, attributes: attribute }],
          },
        ],
      });
      //   console.log(response);
      return response;
    } catch (error) {
      // let explanation = [];
      // error.errors.forEach((err) => {
      //     explanation.push(err.message);
      // });
      // throw new customError(explanation, StatusCodes.BAD_REQUEST)
      console.log(error);
    }
  }

  async findFiltered(filter, sort) {
    try {
      const response = await show.findAll({
        where: filter.show,
        order: sort,
        // attributes: attribute,
        include: [
          {
            model: movie,
            require: true,
            attributes: attribute,
            where: filter.movie,
          },
          {
            model: theatre,
            require: true,
            where: filter.theatre,
            attributes: attribute,
            include: [
              { model: city, attributes: attribute, where: filter.city },
            ],
          },
        ],
      });
      return response;
    } catch (error) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new customError(explanation, StatusCodes.BAD_REQUEST);
    }
  }

  async updateSeats(requiredSeats, id, inc) {
    const transaction = await db.sequelize.transaction();
    await db.sequelize.query(addRowLockOnShows(id));
    const response = await show.findByPk(id);
    let seat = response.dataValues.availableSeats;
    if (inc) {
      try {
        seat = seat + requiredSeats;
        await show.update(
          { availableSeats: seat },
          {
            where: { id: id },
          },
          { transaction: transaction }
        );
        await transaction.commit();
        const finalResponse = await show.findByPk(id);
        return finalResponse;
      } catch (error) {
        await transaction.rollback();
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new customError(explanation, StatusCodes.BAD_REQUEST);
      }
    } else {
      try {
        seat = seat - requiredSeats;
        await show.update(
          { availableSeats: seat },
          {
            where: { id: id },
          },
          { transaction: transaction }
        );
        await transaction.commit();
        const finalResponse = await show.findByPk(id);
        return finalResponse;
      } catch (error) {
        await transaction.rollback();
        let explanation = [];
        error.errors.forEach((err) => {
          explanation.push(err.message);
        });
        throw new customError(explanation, StatusCodes.BAD_REQUEST);
      }
    }
  }
}
module.exports = showRepository;
