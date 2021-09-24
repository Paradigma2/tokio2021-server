import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { validate } from 'class-validator';
import { Sport } from '../entities/Sport';
import { Discipline } from '../entities/Discipline';

export const createSport = async (req: Request, res: Response): Promise<Response> => {
    try {
        const sport = new Sport();

        sport.name = req.body.name;
        sport.type = req.body?.type;
        sport.participantCount = req.body.participantCount;
        sport.maxPerTeam = req.body.maxPerTeam;

        const errors = await validate(sport, { skipMissingProperties: true });
        if (errors.length > 0) { return res.status(422).json(errors); }

        const entityManger = getManager();
        await entityManger.save(Sport, sport);

        if (req.body.disciplines) {
            for(let disc of req.body.disciplines) {
                let discipline = new Discipline();
                
                discipline = disc.name;
                
            }
        }

        return res.status(201).json(sport);
    } catch(err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
}

export const updateSport = async (req: Request, res: Response): Promise<Response> => {
    const entityManger = getManager();
    let sport = await entityManger.findOne(Sport, req.params.id);

    if (sport) {
        sport.name = req.body?.name;
        sport.type = req.body?.type;
        sport.participantCount = req.body?.participantCount;
        sport.maxPerTeam = req.body?.maxPerTeam;
        await entityManger.save(Sport, sport);
        return res.status(200).json(sport);
    } else {
        return res.status(404).json(sport);
    }
}
