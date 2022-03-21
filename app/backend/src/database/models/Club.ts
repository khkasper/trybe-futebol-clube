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

MatchModel.belongsTo(ClubModel, { foreignKey: 'home_team', as: 'homeClub' });
MatchModel.belongsTo(ClubModel, { foreignKey: 'away_team', as: 'awayClub' });

export default ClubModel;
