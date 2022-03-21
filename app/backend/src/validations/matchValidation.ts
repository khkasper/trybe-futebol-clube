import * as Joi from 'joi';
import StatusMessages from '../enums/StatusMessages';
import { IMatchPayload } from '../interfaces/match';

export default class MatchValidation {
  static async validate(body: IMatchPayload): Promise<IMatchPayload> {
    const schema = Joi.object<IMatchPayload>({
      homeTeam: Joi.number().required(),
      awayTeam: Joi.number().required(),
      homeTeamGoals: Joi.number().required(),
      awayTeamGoals: Joi.number().required(),
      inProgress: Joi.boolean(),
    }).messages({
      'any.required': StatusMessages.teamNotFound,
    });
    const result = await schema.validateAsync(body);
    return result as IMatchPayload;
  }
}
