import { Model, DataTypes } from 'sequelize';
import db from '.';
import MatchModel from './Match';

class ClubModel extends Model {
  public id: number;
  public clubName: string;
}

ClubModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  clubName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  tableName: 'clubs',
});

MatchModel.belongsTo(ClubModel);

ClubModel.hasMany(MatchModel, { foreignKey: 'home_team', as: 'homeTeam' });
ClubModel.hasMany(MatchModel, { foreignKey: 'away_team', as: 'awayTeam' });

export default ClubModel;
