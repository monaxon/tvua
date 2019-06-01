<?php

/**
 * Created by Reliese Model.
 * Date: Sat, 01 Jun 2019 18:12:38 +0000.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * 
 * @property int $userid
 * @property string $username
 * @property string $fullname
 * @property string $password
 * @property string $description
 * @property int $role
 * @property int $creatorid
 * 
 * @property \App\Models\User $user
 * @property \Illuminate\Database\Eloquent\Collection $absences
 * @property \Illuminate\Database\Eloquent\Collection $colleges
 * @property \Illuminate\Database\Eloquent\Collection $courses
 * @property \Illuminate\Database\Eloquent\Collection $teachers
 * @property \Illuminate\Database\Eloquent\Collection $users
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'user';
	protected $primaryKey = 'userid';
	public $timestamps = false;

	protected $casts = [
		'role' => 'int',
		'creatorid' => 'int'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'username',
		'fullname',
		'password',
		'description',
		'role',
		'creatorid'
	];

	public function user()
	{
		return $this->belongsTo(\App\Models\User::class, 'creatorid');
	}

	public function absences()
	{
		return $this->hasMany(\App\Models\Absence::class, 'creatorid');
	}

	public function colleges()
	{
		return $this->hasMany(\App\Models\College::class, 'creatorid');
	}

	public function courses()
	{
		return $this->hasMany(\App\Models\Course::class, 'creatorid');
	}

	public function teachers()
	{
		return $this->hasMany(\App\Models\Teacher::class, 'creatorid');
	}

	public function users()
	{
		return $this->hasMany(\App\Models\User::class, 'creatorid');
	}
}
