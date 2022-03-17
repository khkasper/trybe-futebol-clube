import { Model, DataTypes } from 'sequelize';
import db from '.';
import Match from './Match';

class Club extends Model {
  public id: number;
  public club_name: string;
}

Club.init({
  id: DataTypes.INTEGER,
  club_name: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Club',
  timestamps: false,
  tableName: 'clubs',
});

Club.hasMany(Match, { foreignKey: 'id', as: 'matchs' });

export default Club;