import { RequestHandler } from 'express-serve-static-core';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IAcademicSemester } from './academicSemester.interface';
import httpStatus from 'http-status';

const createSemester: RequestHandler = catchAsync(async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    });
    next();
  } catch (err) {
    next(err);
  }
});

export const AcademicSemesterController = {
  createSemester,
};
