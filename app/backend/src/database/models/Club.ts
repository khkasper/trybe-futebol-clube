import { Model, DataTypes } from 'sequelize';
import db from '.';
import Match from './Match';

class Club extends Model {
  public id: number;

  public clubName: string;
}

Club.init({
  id: DataTypes.INTEGER,
  clubName: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Club',
  timestamps: false,
  tableName: 'clubs',
});

Match.belongsTo(Club);

Club.hasMany(Match, { foreignKey: 'home_team', as: 'homeTeam' });
Club.hasMany(Match, { foreignKey: 'away_team', as: 'awayTeam' });

export default Club;
